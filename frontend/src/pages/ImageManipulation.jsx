'use client';

import React, { useState, useRef } from 'react';
import { Stage, Layer, Line, Rect, Circle, Text, Image as KonvaImage } from 'react-konva';
import Header from '../components/Header'

const MedicalImageAnalysis = () => {
  const [image, setImage] = useState(null);
  const [tool, setTool] = useState(null);
  const [annotations, setAnnotations] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [freeDrawing, setFreeDrawing] = useState([]);
  const [distanceStart, setDistanceStart] = useState(null);
  const [distance, setDistance] = useState(null);
  const [brightness, setBrightness] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [showPrompt, setShowPrompt] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const stageRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => setImage(img);
        img.src = event.target?.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStageMouseDown = (e) => {
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    if (!pos || !tool) return;

    if (tool === 'distance') {
      if (!distanceStart) {
        setDistanceStart(pos);
      } else {
        const distPx = Math.sqrt(
          Math.pow(pos.x - distanceStart.x, 2) + Math.pow(pos.y - distanceStart.y, 2)
        );
        const distCm = distPx * 0.026;
        const distMm = distCm * 10;

        setDistance({
          px: distPx.toFixed(2),
          cm: distCm.toFixed(2),
          mm: distMm.toFixed(2),
        });

        setAnnotations((prev) => [
          ...prev,
          {
            id: Date.now(),
            type: 'distance',
            points: [distanceStart.x, distanceStart.y, pos.x, pos.y],
            text: `${distCm.toFixed(2)} cm`,
          },
        ]);
        setDistanceStart(null);
      }
    }

    if (tool === 'rectangle') {
      setShapes((prev) => [
        ...prev,
        { id: Date.now(), type: 'rect', x: pos.x, y: pos.y, width: 100, height: 50 },
      ]);
    }

    if (tool === 'circle') {
      setShapes((prev) => [
        ...prev,
        { id: Date.now(), type: 'circle', x: pos.x, y: pos.y, radius: 40 },
      ]);
    }

    if (tool === 'draw') {
      setDrawing(true);
      setFreeDrawing((prev) => [...prev, { id: Date.now(), points: [pos.x, pos.y] }]);
    }
  };

  const handleMouseMove = (e) => {
    if (!drawing || tool !== 'draw') return;

    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();

    setFreeDrawing((prev) => {
      const lastLine = prev[prev.length - 1];
      const updatedLine = { ...lastLine, points: [...lastLine.points, pos.x, pos.y] };
      return [...prev.slice(0, prev.length - 1), updatedLine];
    });
  };

  const handleStageMouseUp = () => setDrawing(false);

  const handleDownload = () => {
    const uri = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'annotated_image.png';
    link.href = uri;
    link.click();
  };

  const togglePrompt = (toolName) => {
    setTool(toolName);
    setShowPrompt(true);
  };

  const renderAnnotations = () =>
    annotations.map((ann) => (
      <React.Fragment key={ann.id}>
        <Line
          points={ann.points}
          stroke="blue"
          strokeWidth={2}
          dash={[4, 4]}
        />
        <Text
          x={(ann.points[0] + ann.points[2]) / 2}
          y={(ann.points[1] + ann.points[3]) / 2 - 10}
          text={ann.text}
          fontSize={16}
          fill="blue"
        />
      </React.Fragment>
    ));

  const renderShapes = () =>
    shapes.map((shape) =>
      shape.type === 'rect' ? (
        <Rect
          key={shape.id}
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          fill="rgba(0, 123, 255, 0.3)"
          stroke="blue"
        />
      ) : (
        <Circle
          key={shape.id}
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          fill="rgba(0, 123, 255, 0.3)"
          stroke="blue"
        />
      )
    );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full p-4 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Medical Image Analysis Tool</h1>
        </div>
        <p className="text-sm mt-2">
          Analyze medical images, measure distances, annotate, and download results.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="px-4 py-2 border rounded"
          />
          <div className="flex space-x-2">
            <button
              onClick={() => togglePrompt('distance')}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Measure Distance
            </button>
            <button
              onClick={() => togglePrompt('rectangle')}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Rectangle
            </button>
            <button
              onClick={() => togglePrompt('circle')}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Circle
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Download
            </button>
          </div>
        </div>

        {/* Stage */}
        <div className="bg-gray-200 border rounded">
          {image && (
            <Stage
              width={800}
              height={600}
              scaleX={zoom}
              scaleY={zoom}
              ref={stageRef}
              onMouseDown={handleStageMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleStageMouseUp}
            >
              <Layer>
                <KonvaImage
                  image={image}
                  width={800}
                  height={600}
                  filters={[Konva.Filters.Brighten]}
                  brightness={brightness}
                />
                {renderAnnotations()}
                {renderShapes()}
                {freeDrawing.map((line) => (
                  <Line
                    key={line.id}
                    points={line.points}
                    stroke="black"
                    strokeWidth={2}
                  />
                ))}
              </Layer>
            </Stage>
          )}
        </div>
      </div>
    </div>
  );
};

function medical_image_analysis() {
return (
    <div>
        <Header>
            <MedicalImageAnalysis />
        </Header>
    </div>
);
}
export default medical_image_analysis;
