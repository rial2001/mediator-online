import Router from 'next/router';

import { workService } from '@services/workService';
import { workActionTypes } from '@redux/work/workActionTypes';
import { appRouters } from '@routers/appRouters';
import { errorActions } from '@redux/error/errorActions';
import { INewDispute } from '@models/dispute';
import { IWorks } from '@models/works';

export const workActions = {
  addDispute: (dispute: INewDispute) => async dispatch => {
    try {
      await dispatch(workActions.addDisputeSuccess(dispute));
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
  addDisputeMediator: (mediator: string) => ({
    payload: mediator,
    type: workActionTypes.ADD_DISPUTE_MEDIATOR,
  }),
  addDisputeMediatorRequest: (mediator: string) => async dispatch => {
    try {
      await dispatch(workActions.addDisputeMediator(mediator));
      await Router.push(appRouters.newDispute);
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
  addDisputeSuccess: (dispute: INewDispute) => ({
    payload: dispute,
    type: workActionTypes.ADD_DISPUTE_SUCCESS,
  }),

  clearNewDisputeForm: () => ({
    type: workActionTypes.CLEAR_NEW_DISPUTE,
  }),

  closeDispute: (dispute: INewDispute) => ({
    payload: dispute,
    type: workActionTypes.CLOSE_DISPUTE,
  }),

  getWork: () => async dispatch => {
    try {
      const response = await workService.getWorks();
      console.log('works: ', response);

      const { work } = response.data;

      await dispatch(workActions.getWorksSuccess(work));
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
  getWorksSuccess: (work: IWorks) => ({
    payload: work,
    type: workActionTypes.GET_WORK_SUCCESS,
  }),
  openDispute: (dispute: INewDispute) => async dispatch => {
    try {
      await workService.openDispute(dispute);
      await dispatch(workActions.openDisputeSuccess({...dispute}));
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
  openDisputeFailure: (error: string) => ({
    payload: error,
    type: workActionTypes.OPEN_DISPUTE_FAILURE,
  }),
  openDisputeSuccess: (dispute: INewDispute) => ({
    payload: dispute,
    type: workActionTypes.OPEN_DISPUTE_SUCCESS,
  }),
  refuseDispute: (id: string) => async dispatch => {
    try {
      await dispatch(workActions.refuseDisputeSuccess());
      await Router.push(`${appRouters.work}/${id}`);
    } catch (error) {
      dispatch(
        errorActions.setError(
          error.response.data.message,
          error.response.status
        )
      );
      await Router.push(`${appRouters.error}/${error.response.status}`);
    }
  },
  refuseDisputeSuccess: () => ({
    type: workActionTypes.REFUSE_DISPUTE_SUCCESS,
  }),
};
