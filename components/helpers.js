//This is a object which contains alot of helper functions.
import Morning from '../client/images/morning.jpg'
import Day from '../client/images/day.jpg'
import Night from '../client/images/night.jpg'

const Helpers = {
  evalBackground(timeString){
    //Evaluates the background depending on the time
    let background
    const time = Number(timeString.substring(11, 13));
    if(time >= 0 && time <= 3 || time > 18 ){
      background = Night;
    }else if(time >= 6 && time < 12 || time === 18){
      background = Morning;
    }else {
      background = Day;
    }
    const imgStyle = {
      backgroundImage: 'url(' + background + ')',
      backgroundSize: 'cover',
      width: "100%",
    }
    return imgStyle
  },
  evalUnit(unitText){
    //Evaluates the unit and reders the corresponding postfix
    if(unitText === 'metric'){
      return '°C'
    }else{
      return '°F'
    }
  },
  evalSpeedUnit(unit){
    //Evaluates the unit and renders the correspingding postfix
    if(unit === "metric"){
      return "m/s"
    } else{
      return "mph"
    }
  },
  evalTemp(temp, windSpeed, unit){
    //Calculates the windchill effect and return what the temperature acctually feels like
    if(temp < 5 && windSpeed > 2){
      const vPow = Math.pow(windSpeed, 0.16);
      const feelsLike = Math.round(13.12 + 0.6215*temp - 11.37*vPow + 0.3965*temp*vPow);
      return 'Feels like ' + feelsLike + Helpers.evalUnit(unit);
    }
    return ''
  },
  evalIcon(iconNumb, iconID){
    //Evaluates what class the icon should have.
    let icon = "wi ";
    if(iconNumb.substring(2,3) === "n"){
      if(iconID >= 200 && iconID <= 232 ){
        icon += "wi-night-thunderstorm"
      } else if(iconID >= 300 && iconID <= 501 ){
        icon += "wi-night-alt-rain-mix"
      } else if(iconID >= 502 && iconID <= 504 ){
        icon += "wi-night-alt-rain"
      } else if(iconID == 511){
        icon += "wi-night-alt-sleet"
      } else if(iconID >= 520 && iconID <= 531 ){
        icon += "wi-night-alt-rain"
      } else if(iconID >= 600 && iconID <= 602 ){
        icon += "wi-night-alt-snow"
      } else if(iconID >= 611 && iconID <= 612 ){
        icon += "wi-night-alt-sleet"
      } else if(iconID >= 615 && iconID <= 622 ){
        icon += "wi-night-alt-snow"
      } else if(iconID == 701){
        icon += "wi-fog"
      } else if(iconID == 711){
        icon += "wi-smoke"
      } else if(iconID == 721){
        icon += "wi-day-haze"
      } else if(iconID == 731 || iconID == 761){
        icon += "wi-dust"
      } else if(iconID == 741){
        icon += "wi-night-fog"
      } else if(iconID == 751){
        icon += "wi-sandstorm"
      } else if(iconID == 762){
        icon += "wi-volcano"
      } else if(iconID == 771){
        icon += "wi-night-alt-cloudy-windy"
      } else if(iconID == 781){
        icon += "wi-tornado"
      } else if(iconID == 800){
        icon += "wi-night-clear"
      } else if(iconID >= 800 && iconID <= 802){
        icon += "wi-cloud"
      } else if(iconID >= 803 && iconID <= 804){
        icon += "wi-cloudy"
      } else if(iconID == 900){
        icon += "wi-tornado"
      } else if(iconID >= 901 && iconID <= 902){
        icon += "wi-hurricane"
      } else if(iconID == 903){
        icon += "wi-snowflake-cold"
      } else if(iconID == 904){
        icon += "wi-hot"
      } else if(iconID == 905){
        icon += "wi-windy"
      } else if(iconID == 906){
        icon += "wi-hail"
      } else if(iconID >= 951 && iconID <= 955){
        icon += "wi-night-alt-cloudy-windy"
      } else if(iconID >= 956 && iconID <= 961){
        icon += "wi-night-alt-cloudy-gusts"
      } else if(iconID == 962){
        icon += "wi-hurricane"
      }
    } else if(iconNumb.substring(2,3) === "d"){
      if(iconID >= 200 && iconID <= 232 ){
        icon += "wi-day-thunderstorm"
      } else if(iconID >= 300 && iconID <= 501 ){
        icon += "wi-day-rain-mix"
      } else if(iconID >= 502 && iconID <= 504 ){
        icon += "wi-day-rain"
      } else if(iconID == 511){
        icon += "wi-day-sleet"
      } else if(iconID >= 520 && iconID <= 531 ){
        icon += "wi-day-rain"
      } else if(iconID >= 600 && iconID <= 602 ){
        icon += "wi-day-snow"
      } else if(iconID >= 611 && iconID <= 612 ){
        icon += "wi-day-sleet"
      } else if(iconID >= 615 && iconID <= 622 ){
        icon += "wi-day-snow"
      } else if(iconID == 701){
        icon += "wi-fog"
      } else if(iconID == 711){
        icon += "wi-smoke"
      } else if(iconID == 721){
        icon += "wi-day-haze"
      } else if(iconID == 731 || iconID == 761){
        icon += "wi-dust"
      } else if(iconID == 741){
        icon += "wi-day-fog"
      } else if(iconID == 751){
        icon += "wi-sandstorm"
      } else if(iconID == 762){
        icon += "wi-volcano"
      } else if(iconID == 771){
        icon += "wi-day-windy"
      } else if(iconID == 781){
        icon += "wi-tornado"
      } else if(iconID == 800){
        icon += "wi-day-sunny"
      } else if(iconID >= 800 && iconID <= 802){
        icon += "wi-cloud"
      } else if(iconID >= 803 && iconID <= 804){
        icon += "wi-cloudy"
      } else if(iconID == 900){
        icon += "wi-tornado"
      } else if(iconID >= 901 && iconID <= 902){
        icon += "wi-hurricane"
      } else if(iconID == 903){
        icon += "wi-snowflake-cold"
      } else if(iconID == 904){
        icon += "wi-hot"
      } else if(iconID == 905){
        icon += "wi-windy"
      } else if(iconID == 906){
        icon += "wi-hail"
      } else if(iconID >= 951 && iconID <= 955){
        icon += "wi-day-light-wind"
      } else if(iconID >= 956 && iconID <= 961){
        icon += "wi-day-cloudy-gusts"
      } else if(iconID == 962){
        icon += "wi-hurricane"
      }
    }
    return (icon);
  },
  evalDate(unix_timestamp){
    //Evaluates the date and returns a weekday
    const d = new Date(unix_timestamp * 1000);
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
  },
  evalDT_TXT(dt_txt){
    //Evaluates and returns the month in words
    const month = Number(dt_txt.substring(5,7));
    if(month === 1){
      return 'January'
    }else if(month === 2){
      return 'February'
    }else if(month === 3){
      return 'March'
    }else if(month === 4){
      return 'April'
    }else if(month === 5){
      return 'May'
    }else if(month === 6){
      return 'June'
    }else if(month === 7){
      return 'July'
    }else if(month === 8){
      return 'August'
    }else if(month === 9){
      return 'September'
    }else if(month === 10){
      return 'October'
    }else if(month === 11){
      return 'November'
    }else if(month === 12){
      return 'December'
    }
  },
  evalDateShort(unix_timestamp){
    //Evaluates the date and returns the day in a short form
    const d = new Date(unix_timestamp * 1000);
    const weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thurs";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    return weekday[d.getDay()];
  },
  evalMonth(month){
    //Evaluates the moth and returns it in words
    let monthInWords;
    if(month === "01"){
      monthInWords = "Jan"
    } else if(month === "02"){
      monthInWords = "Feb"
    } else if(month === "03"){
      monthInWords = "Mar"
    } else if(month === "04"){
      monthInWords = "Apr"
    } else if(month === "05"){
      monthInWords = "May"
    } else if(month === "06"){
      monthInWords = "Jun"
    } else if(month === "07"){
      monthInWords = "Jul"
    } else if(month === "08"){
      monthInWords = "Aug"
    } else if(month === "09"){
      monthInWords = "Sep"
    } else if(month === "010"){
      monthInWords = "Oct"
    } else if(month === "11"){
      monthInWords = "Nov"
    } else if(month === "12"){
      monthInWords = "Dec"
    }
    return monthInWords;
  }

}
export default Helpers
