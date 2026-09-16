'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const currentState = Object.assign({}, state);
  const clonedStates = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(currentState, action.extraData);
      clonedStates.push(Object.assign({}, currentState));
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete currentState[key];
      }
      clonedStates.push(Object.assign({}, currentState));
    } else if (action.type === 'clear') {
      for (const key of Object.keys(currentState)) {
        delete currentState[key];
      }
      clonedStates.push(Object.assign({}, currentState));
    }
  }

  return clonedStates;
}

module.exports = transformStateWithClones;
