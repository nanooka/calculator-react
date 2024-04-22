import { ACTIONS } from "../components/Calculator";

export type Action =
  | { type: typeof ACTIONS.ADD_DIGIT; payload: { digit: string } }
  | { type: typeof ACTIONS.CHOOSE_OPERATION; payload: { operation: string } }
  | { type: typeof ACTIONS.CLEAR }
  | { type: typeof ACTIONS.DELETE_DIGIT }
  | { type: typeof ACTIONS.EVALUATE };

export type Dispatch = React.Dispatch<Action>;

export type CalculatorState = {
  currentOperand: string | null;
  previousOperand: string | null;
  operation: string | null;
  overwrite?: boolean;
};

export type Evaluate = {
  currentOperand: string | null;
  previousOperand: string | null;
  operation: string | null;
};

export type OperationButtonProps = {
  dispatch: React.Dispatch<{ type: string; payload: { operation: string } }>;
  operation: string;
};

export type DigitButtonProps = {
  dispatch: React.Dispatch<{ type: string; payload: { digit: string } }>;
  digit: string;
};
