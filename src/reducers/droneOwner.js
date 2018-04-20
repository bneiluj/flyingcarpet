/*
 * This reducer is for the drone owner dialog
 * @flow
 */

import * as types from '../actions/droneOwner-types';

type StateTypes = {
  newDroneAttached: boolean, // True if a drone was just attached in the attach dialog (only True
                             // if the user hasn't left the dialog yet), false otherwise.
                             // NOTE: this field is used to prevent the camera QR code reader from
                             //       firing multiple times for a successful scan.
  droneToken: string, // This is the drone's token that is scanned from the QR code
  droneAddress: string // This is the drone's smart contract address that is scanned from the QR
                       // code.
};

const initialState: StateTypes = {
  newDroneAttached: false,
  droneToken: '',
  droneAddress: '',
};

export default function reducer(
  state: StateTypes = initialState,
  action: {[string]: mixed} = {},
): {} {
  switch (action.type) {
    case types.SET_NEW_DRONE_ATTACHED:
      return {
        ...state,
        newDroneAttached: action.newDroneAttached,
      };
    case types.SET_DRONE_TOKEN:
      return {
        ...state,
        droneToken: action.droneToken,
      };
    case types.SET_DRONE_ADDRESS:
      return {
        ...state,
        droneAddress: action.droneAddress,
      };
    default:
      return state;
  }
}
