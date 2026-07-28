const RELATIVE_MAX_FACTORS = [100, 97, 94, 92, 89, 86, 83, 81, 78, 75, 73, 71];

const INTENSITY_TO_PROTOCOL = {
  50: {
    sets: 3,
    reps: 12,
  },
  55: {
    sets: 4,
    reps: 8,
  },
  65: {
    sets: 5,
    reps: 6,
  },
  73: {
    sets: 4,
    reps: 6,
  },
  75: {
    sets: 4,
    reps: 5,
  },
  78: {
    sets: 5,
    reps: 4,
  },
  80: {
    sets: 6,
    reps: 3,
  },
  83: {
    sets: 4,
    reps: 4,
  },
  87: {
    sets: 5,
    reps: 3,
  },
  90: {
    sets: 7,
    reps: 2,
  },
  95: {
    sets: 5,
    reps: 2,
  },
  100: {
    sets: 4,
    reps: 1,
  },
};

export const getProtocol = ({ oneRepMax, relativeIntensity, reps }) => {
  const absoluteIntensity =
    (relativeIntensity *
      RELATIVE_MAX_FACTORS[Math.min(RELATIVE_MAX_FACTORS.length, reps) - 1]) /
    100;

  const weight = absoluteIntensity * oneRepMax;

  for (const [key, value] of Object.entries(INTENSITY_TO_PROTOCOL)) {
    if (absoluteIntensity > parseFloat(key)) {
      continue;
    }

    return { ...value, weight: weight / 100 };
  }
};
