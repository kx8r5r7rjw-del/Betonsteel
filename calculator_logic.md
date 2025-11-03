# Calculator Algorithm Pseudo-code

This document outlines the pseudo-code for the reinforcement steel calculator tool.

## Algorithm

```plaintext
// Helper function to get mat dimensions based on type
FUNCTION get_mat_dimensions(diameter, mesh_size)
  // In a real application, this would look up data from a database or product catalogue
  // Example: Thicker diameter might correspond to a standard larger mat size
  IF diameter >= 8 AND mesh_size >= 150 THEN
    RETURN { length: 6.0, width: 2.4 } // Standard large mat
  ELSE
    RETURN { length: 5.0, width: 2.0 } // Standard medium mat
  END IF
END FUNCTION

FUNCTION calculate_materials(floor_area, diameter, mesh_size)

  // 1. Get dimensions for the selected mat type
  mat_dimensions = get_mat_dimensions(diameter, mesh_size)
  mat_length = mat_dimensions.length
  mat_width = mat_dimensions.width

  // 2. Define constants
  // Overlap factor to account for overlapping mats (e.g., 10%)
  OVERLAP_FACTOR = 1.10
  // Support beams needed might depend on mat size/weight (diameter)
  // Heavier mats (larger diameter) might need more support.
  IF diameter >= 8 THEN
    SUPPORT_BEAMS_PER_MAT = 4
  ELSE
    SUPPORT_BEAMS_PER_MAT = 3
  END IF

  // 3. Calculate the area of a single mat
  mat_area = mat_length * mat_width

  // 4. Calculate the number of mats needed
  // Adjust floor area for overlap and round up to the nearest whole number
  effective_floor_area = floor_area * OVERLAP_FACTOR
  number_of_mats = CEIL(effective_floor_area / mat_area)

  // 5. Calculate the number of support beams needed
  number_of_support_beams = number_of_mats * SUPPORT_BEAMS_PER_MAT

  // 6. Return the results
  RETURN {
    "mats_needed": number_of_mats,
    "support_beams_needed": number_of_support_beams
  }

END FUNCTION
```

## Example Usage

```plaintext
// User inputs
user_floor_area = 50 // m²
selected_diameter = 8 // mm
selected_mesh_size = 150 // mm

// Calculation
result = calculate_materials(user_floor_area, selected_diameter, selected_mesh_size)

// Output
PRINT "Number of mats needed: " + result.mats_needed
PRINT "Number of support beams needed: " + result.support_beams_needed
```
