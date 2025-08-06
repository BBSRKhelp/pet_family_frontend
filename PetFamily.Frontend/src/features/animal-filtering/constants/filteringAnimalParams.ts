import {
  ADDRESSES,
  BREEDS,
  COLORATIONS,
  DATE_ADDED,
  SPECIES,
  STATUS,
} from "../../../shared/constants/petConstants";

export const FILTERING_ANIMAL_PARAMS = [
  {
    options: SPECIES,
    label: "Вид",
  },
  {
    options: BREEDS,
    label: "Порода",
  },
  {
    options: [],
    label: "Name",
  },
  {
    options: [],
    label: "RangeSlider",
  },
  {
    options: COLORATIONS,
    label: "Окрас",
  },
  {
    options: STATUS,
    label: "Статус",
  },
  {
    options: ADDRESSES,
    label: "Место нахождения",
  },
  {
    options: [],
    label: "Checkboxes",
  },
  {
    options: DATE_ADDED,
    label: "Дата добавления",
  },
];
