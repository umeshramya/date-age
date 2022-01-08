
export const ageArray = ["Years", "Months", "Days"] as const
export type AgeType = typeof ageArray[number]
/**
 * This oclass deals with maniplitation of time and date
 */
export class Age {


  /**
    * 
    * @param dob date of birth
    * @returns age in days month or years
    */
  public dobToAge(dob: Date): string {
    let ret: string = ""
    let curDate: Date = new Date();
    let daysDiff: number = Math.abs(curDate.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24)

    if (daysDiff < 2) {
      ret = `1 day`
    } if (daysDiff < 30) {
      ret = `${parseInt(`${daysDiff}`)} days`
    } else if (daysDiff < 60) {
      ret = `1 month`
    } else if (daysDiff < 365) {
      ret = `${parseInt(`${daysDiff / 30}`)} months`
    } else if (daysDiff < 730) {
      ret = `1 year`
    } else {
      ret = `${parseInt(`${daysDiff / 365}`)} years`
    }
    return ret;
  }

  /**
   * Approx date of birth  input is in years only not for those less than 1 year
   * @param age: number
   * @param type  : "Years" | "Months" | "Days"
   * @returns Date date of birth
   */
  public ageToDob(age: number, type: AgeType): Date {
    const milliday = 1000 * 60 * 60 * 24;
    let curMillsiseconds = new Date().getTime();
    let diffMiilisceonds: number = 0
    if (type === "Years") {
      diffMiilisceonds = milliday * 365 * age
    } else if (type === "Months") {
      diffMiilisceonds = milliday * 30 * age
    } else {
      diffMiilisceonds = milliday * age
    }

    return new Date(curMillsiseconds - diffMiilisceonds)
  }




}


