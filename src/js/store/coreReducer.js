// Ce fichier sert a regrouper les differant reducer a combiné
// pour les ajouter dans le store par la suite
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux';

// Liste des reducer a combiner pour les ajouter au store

// Combinaison des different reducer
export default combineReducers({
  router: routerReducer,
});
