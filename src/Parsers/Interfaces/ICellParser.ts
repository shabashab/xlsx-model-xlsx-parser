import { Cell } from "exceljs";
import { CellModel } from "xlsx-model";

export default interface ICellParser {
  parse(cell: Cell): CellModel;
}