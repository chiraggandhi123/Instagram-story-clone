import { IPayload } from "@app/types/interfaces/payload.interface"
import { toggleOverflowHidden } from "./toggleOverflowHidden"
import { REDUCER_TYPES } from "@app/reducers/types.enums"
import { IConfig } from "@app/types/interfaces/config.interface"

export const toggleModal = (dispatch: React.Dispatch<IPayload>, config?: IConfig) => {
  toggleOverflowHidden("body")
  if (dispatch) dispatch({ type: REDUCER_TYPES.toggleModal, config })
}