export const UPDATE_INDEX = 'UPDATE_INDEX';
export const updateIndex = index => ({
  type: UPDATE_INDEX,
  payload: index
});

export const UPDATE_BODY = 'UPDATE_BODY';
export const updateDocumentBody = body => ({
  type: UPDATE_BODY,
  payload: body
});

export const SAVE_DOCUMENT = 'SAVE_DOCUMENT';
export const saveDocument = document => ({
  type: SAVE_DOCUMENT,
  payload: document
});
