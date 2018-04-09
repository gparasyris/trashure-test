import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { quizes } from '../../assets/data/quizes';
import { QuizSinglePage } from './components/quiz-single/quiz-single';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  quizes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quizes = quizes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  itemTap(quiz){
    this.navCtrl.push(QuizSinglePage, {quiz: quiz});
  }

}

/* quiz format 
  [{
    "question": "q?",
    "answers": [
      {
      "title": "Milk cartons ",
      "correct": false
      },
      {
        "title": "Plastic water bottles ",
        "correct": false
      },
      {
        "title": "Glass containers ",
        "correct": false
      },
      {
        "title": "All of the above",
        "correct": true

      }
    ]
  }]

*/
