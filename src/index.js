import doGet from './webapp';
import formSubmit from './app-scripts/formSubmit';
import getUserData from './app-scripts/getUserData';
import getStage1WinnerData from './app-scripts/getWinners1';
import getStage2WinnerData from './app-scripts/getWinners2';
import getStage3WinnerData from './app-scripts/getWinners3';

global.doGet = doGet;
global.formSubmit = formSubmit;
global.getUserData = getUserData;
global.getStage1WinnerData = getStage1WinnerData;
global.getStage2WinnerData = getStage2WinnerData;
global.getStage3WinnerData = getStage3WinnerData;
