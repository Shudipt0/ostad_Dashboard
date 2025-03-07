import axios from "axios";

const BaseURL = 'http://inertia-pos.manirul.xyz/api';


// bank cards
export async function BankCardList() {
  const res = await axios.get(BaseURL + "/card-list");
  if(res.status === 200){
    return res.data
  }else{
    return []
  }   
};


// bank cards
export async function RecentTrans() {
  const res = await axios.get(BaseURL + "/recent-transactions-list");
  if(res.status === 200){
    return res.data
  }else{
    return []
  }   
};



// weekly activitis
export async function WeeklyActivity() {
  const res = await axios.get(BaseURL + "/weekly-activity-list");
  if(res.status === 200){
    return res.data
  }else{
    return []
  }   
};
// expense list
export async function ExpenseList() {
  const res = await axios.get(BaseURL + "/expense-list");
  if(res.status === 200){
    return res.data
  }else{
    return []
  }   
}