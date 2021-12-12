import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";
import {getSurveyItems} from "../../dump/surveyItemDump";
import {SurveyItem} from "../domain/SurveyItem";
import _ from "lodash";

export class SurveyItemStore {
  parent
  surveyItems = []
  isLoading = true
  isResultLoading = false;
  result = {
    'score': []
  }

  constructor(parent) {
    makeAutoObservable(this)
    this.parent = parent
    this.loadSurveyItemsByCategory()
  }

  loadSurveyItemsByCategory(category) {
    this.isLoading = true;
    runInAction(() => {
      this.surveyItems = [];
      // todo 서버 호출 방식으로 변경되어야 함
      let filteredSurveyItems;
      this.getSurveyItems2(category)
      if(_.isNil(category)){
        filteredSurveyItems = getSurveyItems();
      } else {
        filteredSurveyItems = getSurveyItems().filter(item => param.code === item.category);
      }
      filteredSurveyItems.forEach(item => this.updateSurveyItemFromServer(item))
      this.isLoading = false
    })
  }

  getSurveyItems2(id){
    console.debug('ididid', id)


  }

  updateSurveyItemsToServer() {
    this.isResultLoading = true;
    setTimeout(() => {
      this.result.score = [
        {
          "faction": "학습의지",
          "chardonay": 31,
        },
        {
          "faction": "학습행동",
          "chardonay": 40,
        },
        {
          "faction": "학습신념",
          "chardonay": 34,
        }]
      this.isResultLoading = false;
    }, 1000);
  }

  updateSurveyItemFromServer(item) {
    let surveyItem;
    if(!surveyItem){
      surveyItem = new SurveyItem(this, item)
      this.surveyItems.push(surveyItem);
    }
  }

  getTest() {
    axios.get('api')
      .then(res => {
        console.debug('res', res)
      })
  }

  get checkCount(){
    return this.surveyItems.filter(item =>
      true === item.isChecked
    ).length
  }

  get itemCount(){
    return this.surveyItems.length
  }

  get progressPercent() {
    return this.checkCount/this.itemCount * 100
  }

//   axios.get(`${url}?${paramParser(sortedParams)}`)
// .then(res => {
// runInAction(() => {
// !this.isSameSearchHistory(this.searchValue) && this.setPage(0)
// handler(res)
// })
// })
// .catch(error => {
// if (errorHandler) {
// errorHandler(error)
// } else {
// try {
// const {message} = error['response']['data']
// const result = {status: RESULT_ERROR, message, result: false}
// console.debug('error result', result)
// } catch (e) {
// console.debug('unknown error', e)
// }
// }
// })
// .finally(() => {
// this.addSearchValueHistory(this.searchValue)
// this.setLoading(false)
// finalHandler()
// })
}