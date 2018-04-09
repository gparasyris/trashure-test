import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'quiz-single',
  templateUrl: 'quiz-single.html'
})
export class QuizSinglePage {
  @ViewChild(Slides) slides: Slides;

  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  quiz: any;
  score: number = 0;
  answered: number = 0;

  completed: boolean = false;
  wrongArray: boolean[];
  navigated: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wrongArray = [];
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.quiz = navParams.get('quiz');
    this.quiz.questions.forEach(q => {
      q['answered'] = false;
      q.answers.forEach(a => {
        a['selected'] = false;
      });
    });
  }

  select(q, a) {
    if (this.completed)
      return;
    let decrease = 0;
    this.quiz.questions[q].answered = true;
    this.quiz.questions[q].answers.forEach(a => {
      if (a['selected'])
        decrease = 1;
      a['selected'] = false;
    });
    this.quiz.questions[q].answers[a].selected = true;
    if (!decrease) {
      this.answered++;
    }

    console.log(this.slides._activeIndex);
    if (this.slides._activeIndex < this.quiz.questions.length - 1)
      setTimeout(() => {
        this.slides.slideNext(200);

      }, 300);
    else {
      console.log('sum');
      this.verdict();
    }
  }

  verdict() {
    this.completed = true;
    for (let i = 0; i < this.quiz.questions.length; i++) {
      let correct = this.quiz.questions[i].answers.find(a => a.correct === true);
      if (correct.selected) {
        this.score++;
        this.wrongArray.push(true)
      }
      else {
        this.wrongArray.push(false);
      }
    }
  }

  slide(num) {
    this.slides.slideTo(num);
    this.navigated = num; 
  }

}
