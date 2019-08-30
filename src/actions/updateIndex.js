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
export const saveDocument = title => ({
  type: SAVE_DOCUMENT,
  payload: title
});

export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const deleteDocument = index => ({
  type: DELETE_DOCUMENT,
  payload: index
});
