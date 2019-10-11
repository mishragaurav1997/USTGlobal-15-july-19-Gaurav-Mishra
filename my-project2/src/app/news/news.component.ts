import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newData:any ='';

  news =[
    { 
      brand:'Article 370',
      img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/flag-770x433.jpeg?8AWb7M417D9.vBaphOHNna9Dozpk2R8W',
      description:'The state flag, which is red in colour with three equidistant white vertical strips and a white plough, represents the bloodshed from the Kashmir agitation in July 13, 1931. Jammu and Kashmir was permitted to fly its own flag along with the national flag under Article 370,Parliament approved a resolution abrogating special status to Jammu and Kashmir under Article 370 of the Constitution and a bill for splitting the state into two union territories,Jammu and Kashmir Assembly Speaker Nirmal Singh became the first Constituent authority to remove the state flag from his official vehicle on Tuesday.'
    },
    { 
      brand:'India bids Farewell to Sushma Swaraj',
      img:'https://images.livemint.com/img/2019/08/07/600x338/Sushmanew_1565173689473.jpg',
      description:'The nation on Wednesday bid an emotional farewell to Sushma Swaraj, one of its most outstanding politicians, as her mortal remains were cremated with full state honours in the presence of top political leaders and hundreds of her grieving admirers.Swaraj died at AIIMS here late Tuesday night at the age of 67 after suffering a massive heart attack, plunging the country in a state of grief and sparking an outpouring of condolences from across the world.'
    },
    { 
      brand:'INDIA whitewash WINDIES in away t20 series ',
      img:'https://bsmedia.business-standard.com/_media/bs/img/article/2019-08/07/full/1565118055-9958.jpg',      
      description:'After clinching the three-match T20I series, India cricket team defeated West Indies cricket team in the third T20I match at the Providence Stadium, Guyana today to complete a 3-0 whitewash.Young Rishabh Pant finally came good under the guidance of skipper Virat Kohli as India comfortably beat West Indies. Chasing target of 147 on a slowish deck, skipper Kohli anchored the innings to perfection with 59 off 45 balls while Pant was brilliant during his unbeaten 65 off 42 balls. The target was achieved in 19.1 overs.'
    },
    { 
      brand:'Mumbai Rains',
      img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/rain2-770x433.png?0pCXjhRqMZh086eOfITvl.DmIkWRHtjW',
      description:'Normal life in the city of Mumbai came to a standstill due to Mumbai rains for the past two days as the city got battered by heavy rainfall during the weekend. Not just Mumbai but other states including Gujarat, Bihar and Andhra Pradesh are also witnessing heavy rains. NDRF teams have been deployed for rescue operations in several districts.With rains lashing several parts of Maharashtra, Chief Minister Devendra Fadnavis on Tuesday reviewed the flood situation and asked the officials concerned to provide speedy relief to those affected.'
    },
    { 
      brand:'North Korea one more missile testing',
      img:'https://media2.foxnews.com/BrightCove/694940094001/2019/08/06/694940094001_6068600990001_6068602166001-vs.jpg',
      description:'A U.S. official told Fox News Monday that North Korea had launched two short-range ballistic missiles from its west coast that flew over the rogue nation before splashing down into the Sea of Japan. KCNA claimed the missiles accurately hit an island target off North Koreas eastern coast.'
    },
    { 
      brand:'Bollywood rush kashmir for script',
      img:'https://images.news18.com/ibnlive/uploads/2019/08/kashmir2.jpg',
      description:'Quoting a source, The Quint reports that following the announcement, 20 to 30 producers have approached the Indian Motion Pictures’ Producers’ Association (IMPPA) register the titles ‘Article 370’ and ‘Article 35A.’Other titles being eyed by the producers include ‘Kashmir Humara Hai’ and the literal translation of Article 370 and 35A in Hindi - Dhara 370 and Dhara 35A, according to The Quint.'
    },
    { 
      brand:'Acquisition on big screen by Spider-man',
      img:'https://pmcdeadline2.files.wordpress.com/2019/07/df-28400_rv2.jpg?w=681&h=383&crop=1',
      description:'FX’s latest big-screen acquisitions include Sony’s hits Spider-Man: Far from Home and Once Upon a Time In Hollywood, Universal’s Fast & Furious: Hobbs & Shaw and Jordan Peele’s Us, DreamWorls Animation’s How To Train Your Dragon: The Hidden World, Universal’s The Secret Life Of Pets, Blumhouse/Universal’s Glass, Sony’s Men In Black International, and Universal’s Yesterday.'
    },
    { 
      brand:'Steve Smith on Fire in Ashes',
      img:'https://www.telegraph.co.uk/content/dam/cricket/2019/08/04/TELEMMGLPICT000205591651_trans_NvBQzQNjv4BqoUJ0qwinqIpHP7B0AZWasDmfM7x_1fvfudBGU-xWnRI.jpeg?imwidth=1400',
      description:'Steve Smith completed a majestic return to Test cricket with his second century in the Ashes opener at Edgbaston to leave England scrapping to salvage a result.Smith, back in the Baggy Green 16 months after being banned for his role in the sandpaper scandal, followed a brilliant 144 on day one with an equally fine 142 on day four to become just the fifth Australian to hit twin hundreds against England.'
    },
    { 
      brand:'Pat Cummins in rapid 100 Notches',
      img:'https://www.cricket.com.au/~/-/media/News/2019/08/6cumminscele2.ashx?w=1600',
      description:'The right-armer achieved the milestone in just his 21st Test, making him the second fastest Australian paceman to reach the landmark after Charles The Terror Turner, the Aussie quick with an awesome sobriquet who took his 100th Test wicket in his 17th match back in 1895.It is the latest achievement in Cummins glittering career, which started with a player-of-the-match performance in November 2011 against South Africa as an 18-year-old tearaway'   
     },
    { 
      brand:'HDFC revised FD',
      img:'https://images.livemint.com/img/2019/08/06/600x338/2019-07-22T052502Z_1_LYNXNPEF6L0CJ_RTROPTP_3_INDIA-MODI-CORRUPTION_1565085313646_1565085328925.JPG',
      description:'The bank offers interest rates ranging from 3.50% per annum to 7.30% per annum on deposits maturing in seven days to 10 years, across various tenures.  For deposits maturing in seven days to 6 months, the interest rates remain unchanged at 6.00% for general public and 50 basis points higher, i.e. 6.50% for senior citizens. The bank is offering an interest rate of 6.75% to general public and 7.25% to senior citizens on fixed deposits of seven days to less than 1 year.'
    }
  ];

  constructor() { }
  sendNew(news){
    this.newData =news;
  }
  ngOnInit() {
  }

}
