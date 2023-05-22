const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

/*function*/ 
const createHtml = (athlete) => {
  console.log('athlete',athlete)
  //destruct
  const {firstName, surname, id, races }= athlete; 
  console.log('firstnam',firstName)
  console.log('races',races)

  const lastRace= races.pop();
  const {date,time}=lastRace
  console.log('time',time)
  const timeReverse = time.reverse();
  console.log('timeR',timeReverse)

  //fragment
  const fragment =document.createDocumentFragment();
    //title create 
    const title = document.createElement('h2');
    title.textContent=id;
    fragment.appendChild(title);

    //list create 
    const list = document.createElement('dl');
    
    // date 
    const day = new Date().getDate();
    const month = MONTHS[new Date().date];
    const year =  new Date().getFullYear();

    // time
    
   const [first, second, third, fourth] = time;
   const total = first + second + third + fourth;
    //const total=91;
    const rhours =total / 60;
    const hours = Math.floor(rhours);
    const minutes = Math.round((rhours - hours) * 60);

    
    list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length    }</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, 0) }:${minutes.toString().padStart(2, 0)}</dd>`;
    
    fragment.appendChild(list);
   

}

/* Destruct*/
const {NM372,SV782}= data.response.data;

/*calling function */
//createHtml(SV782);

document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));

