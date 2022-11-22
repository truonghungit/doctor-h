import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PatientListPage = lazy(() => import('../views/patient-list-page/patient-list-page'));
const PatientDetailPage = lazy(() => import('../views/patient-detail-page/patient-detail-page'));

const patientsRoutes: Array<RouteObject> = [
  {
    path: 'patients',
    element: <PatientListPage />,
  },
  {
    path: 'patients/:id',
    element: <PatientDetailPage />,
    children: [],
  },
];

export default patientsRoutes;
