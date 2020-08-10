import { AxiosResponse } from 'axios';
import { KitsuRequest } from '../declaration/types.td';
import { Alert } from 'react-native';

const COMMON_ERROR_STRING = 'Something went wrong. Try again later.';

function createSuccessfullResponse<T>(data?: T) {
  return {
    status: true,
    data,
  };
}

function createErrorResponse(error: string) {
  Alert.alert('Error', error);

  return {
    status: false,
    data: undefined,
  };
}

function parseResponse<T>(response?: AxiosResponse<KitsuRequest<T>>) {
  if (response && response.status >= 200 && response.status < 300) {
    return createSuccessfullResponse<T>(response.data.data);
  }

  // TODO: Handle specific error codes
  return createErrorResponse(COMMON_ERROR_STRING);
}

export { COMMON_ERROR_STRING, createErrorResponse, parseResponse };
