import { OperationButtonProps } from "../types/types";
import { ACTIONS } from "./Calculator";

export default function OperationButton({
  dispatch,
  operation,
}: OperationButtonProps) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
