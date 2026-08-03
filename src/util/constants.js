export const ROUTE = {
  INDEX: "/",
  PROTOCOL_RESULTS: "/protocol-results",
  PROTOCOL_SAVED: "/protocol-saved",
  ORM: "/orm",
  ORM_RESULTS: "/orm-results",
  ORM_SAVED: "/orm-saved",
};

export const UNIT = {
  KG: "kg",
  LB: "lb",
};

export const SHARED_KEY = {
  REPS: "reps",
  WEIGHT: "weight",
  ORM: "orm",
  UNITS: "units",
};

export const PROTOCOL_KEY = {
  ...SHARED_KEY,
  RI: "ri",
  SETS: "sets",
};

export const ORM_KEY = {
  ...SHARED_KEY,
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
