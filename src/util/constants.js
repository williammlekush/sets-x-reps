export const ROUTE = {
  INDEX: "/",
  PROTOCOL_RESULTS: "/protocol-results",
  SAVED_PROTOCOLS: "/protocol-saved",
  ORM: "/orm",
};

export const UNIT = {
  KG: "kg",
  LB: "lb",
};

export const SHARED_KEY = {
  REPS: "reps",
  WEIGHT: "weight",
  ORM: "orm",
};

export const PROTOCOL_KEY = {
  ORM: SHARED_KEY.ORM,
  RI: "ri",
  REPS: SHARED_KEY.REPS,
  SETS: "sets",
  WEIGHT: SHARED_KEY.WEIGHT,
  UNITS: "units",
};

export const ORM_KEY = {
  REPS: SHARED_KEY.REPS,
  WEIGHT: SHARED_KEY.WEIGHT,
  ORM: SHARED_KEY.ORM,
};

export const TBL_COL_PROPS = {
  paddingX: 1,
  textAlign: "center",
};

export const RELATIVE_MAX_FACTORS = [
  100, 97, 94, 92, 89, 86, 83, 81, 78, 75, 73, 71,
];

export const INTENSITY_TO_PROTOCOL = {
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
