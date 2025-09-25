export interface Qbank {
  _id: string;
  id: string;
  name: string;
  category: string;
  noOfQuestions: number;
  status: boolean;
}
 export interface Option{
  text:string;
  isCorrect:boolean;
 }

 export interface Question{
   description:string;
   options:Option[];
  _id:string;
  
 }
 export interface FullQbank extends Qbank{
  questions:Question[];
 }

 
