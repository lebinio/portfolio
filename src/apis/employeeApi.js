import axios from 'axios';
import { handleResponse, handleError } from './apiUtils';

export function getEmployees() {
  return axios
    .get('http://dummy.restapiexample.com/api/v1/employees')
    .then(handleResponse)
    .catch(handleError);
}

export function getEmployee() {
}
