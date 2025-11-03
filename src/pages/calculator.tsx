import { useState } from 'react';

// Helper function to get mat dimensions based on type (from calculator_logic.md)
function getMatDimensions(diameter: number, mesh_size: number) {
  if (diameter >= 8 && mesh_size >= 150) {
    return { length: 6.0, width: 2.4 }; // Standard large mat
  } else {
    return { length: 5.0, width: 2.0 }; // Standard medium mat
  }
}

// Main calculation logic (from calculator_logic.md)
function calculateMaterials(floor_area: number, diameter: number, mesh_size: number) {
  const mat_dimensions = getMatDimensions(diameter, mesh_size);
  const mat_length = mat_dimensions.length;
  const mat_width = mat_dimensions.width;

  const OVERLAP_FACTOR = 1.10;
  const SUPPORT_BEAMS_PER_MAT = diameter >= 8 ? 4 : 3;

  const mat_area = mat_length * mat_width;
  const effective_floor_area = floor_area * OVERLAP_FACTOR;
  const number_of_mats = Math.ceil(effective_floor_area / mat_area);
  const number_of_support_beams = number_of_mats * SUPPORT_BEAMS_PER_MAT;

  return {
    mats_needed: number_of_mats,
    support_beams_needed: number_of_support_beams,
  };
}

export default function CalculatorPage() {
  const [floorArea, setFloorArea] = useState('');
  const [diameter, setDiameter] = useState('8');
  const [meshSize, setMeshSize] = useState('150');
  const [result, setResult] = useState<{ mats_needed: number; support_beams_needed: number } | null>(null);

  const handleCalculate = () => {
    const area = parseFloat(floorArea);
    const diam = parseInt(diameter);
    const mesh = parseInt(meshSize);

    if (area > 0 && diam > 0 && mesh > 0) {
      const calculation = calculateMaterials(area, diam, mesh);
      setResult(calculation);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Materiaal Calculator</h1>
      <div className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Vloeroppervlakte (m²)</label>
          <input
            type="number"
            value={floorArea}
            onChange={(e) => setFloorArea(e.target.value)}
            className="w-full p-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Diameter (mm)</label>
          <select value={diameter} onChange={(e) => setDiameter(e.target.value)} className="w-full p-2 border">
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Maaswijdte (mm)</label>
          <select value={meshSize} onChange={(e) => setMeshSize(e.target.value)} className="w-full p-2 border">
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </div>
        <button onClick={handleCalculate} className="bg-blue-500 text-white px-6 py-2 rounded-md">
          Bereken
        </button>

        {result && (
          <div className="mt-8 p-4 border bg-gray-50">
            <h2 className="text-2xl font-bold">Resultaat</h2>
            <p>Benodigde bouwstaalmatten: {result.mats_needed}</p>
            <p>Benodigde supportliggers: {result.support_beams_needed}</p>
          </div>
        )}
      </div>
    </div>
  );
}
