import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1> Experience </h1>
        <p>
        Recently Accolite Digital Visited my College for Software Developer Role for 2022 batch. According to me, the Level of Questions was Easy to Medium.

The interview process consisted of 5 rounds

MCQ Round
Coding Round
Technical Interview R1
Technical Interview R2
HR Round
Round 1(MCQ Round): About 100 or more gave this round

The MCQ round had 30 Questions, we had to answer them in 30 mins, with no negative marking. The cut-off was I think above 60% but better to score between 75-80% (If you score this much you will definitely go to the next round)
Questions were based on OOPS, C++, Data Structures, Algorithms, and Aptitude were asked in this round.
I got a good score and got a mail for the coding round.
Round 2(Coding Round): Around 85-90 gave this round

This round had only one question and the time given was 60 mins, it was a medium-level Question based on Arrays. The question was given in the form of a story just like we get on Platforms like Codechef. We had to provide an optimized solution with given and hidden test cases getting Correct.
https://www.geeksforgeeks.org/count-minimum-steps-get-given-desired-array/. This was the question asked just framed in some story
One problem that I faced was the interface is a little confusing so read the problem statement carefully and that they mention in which file you have to write the code and run the test cases.
I solved the question correctly and received the link for the first Technical Interview that was on the next day.
Round 3(Technical Round R1): 20 students were shortlisted for R1




In the starting he asked me if this was my first Technical Interview or have I had given any before of any other company, I told him that this is my first.
He then asked me the subjects I am good at so I told him DSA, DBMS, OOPS. He asked if I have studied Compiler Design and asked me the steps, I told him that although the subject was in our curriculum I did not prepare that, he then asked about COA(Computer Architecture which was taught to us in Sem4) I told him that I do not remember much of that too. He asked if I could recall Booths Algo and what it does, I couldn’t recall it at that time.
Then he said okay let’s move on to DSA he asked me what algorithms I know, I told him BFS, DFS then he interrupted in between and asked if I knew Dijkstra’s algo I told him.
Then he asked a few questions and told me to code them on notepad.

How to find loop in linked list without using any library(I told him brute which was using library and then the optimal approach) – he was satisfied
Difference between Prims algo and Dijkstra
And a few other simple code and theory questions.
Then he said he was done with the interview and said HR will contact for any further process.
This was for about 30-35 mins

I was not sure if I would be selected for next round as I did not know many of the questions during the initial phase of the interview. But then I received a call from HR and she told me that I was selected for Round 2 which was at 3:30 on the same day.

Round 4(Technical Round R2): 7 students were shortlisted for R2

He asked me if I was in 5th sem or 7th Sem. I told him 7th, then he proceeded with the interview. He asked me if I knew java I told him I knew C++, not java. Then he gave a code snippet and asked for the output. I struggled little but told the answer which was not quite correct but close.
Then he asked me if I knew DBMS and SQL then asked me some SQL Queries (He was really helpful and gave hints when I got stuck near the correct answer). He then asked me BST traversal questions and asked me to write the code for it. He then asked the Time and Space Complexity of the Code.
Some of the questions asked were

How would you find if a linked list is circular? Is an empty linked list circular and why so?
reverse a string
Asked OOPS concepts. Then told myself that I have to design a system where I can find the areas of rectangle, square, triangle, and square. (basically the classes and all). We had a long discussion on this and I was able to do it.
Then he asked what is abstract class and related questions.
He said he was done with the interview and asked if I had any questions for him. I asked him how long he had been in the company and what his role was and the tech stack that is used in the company. He told me about it and then the interview ended.
This went for about 70-80mins. He was really helpful and told me that this is just a discussion no need to get nervous.

One of my friends got the mail for HR after this round but I did not. I thought that I did not get selected for further process. But at 5:15 I got a call from HR that I have been selected for the next round and that would be at 5:30 which is the HR round.

Round 5(HR): 3 students were selected for HR
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;