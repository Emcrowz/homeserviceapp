import { useState } from "react";
import Calendar from "react-calendar";
import { User } from "../User/User";
import styles from "./BookingPannel.module.css";
import { Button } from "../Common/Button";
import "./CalendarStyles.css";
import { useBookings } from "./Hooks/useBookings";
import { postBooking } from "./BookingApi";

interface BookingPannelProps {
  bookingBusiness: string;
  bookingUser: User;
  officialWorkTime: number[];
  workTimes: number[][];
  handleBooking: () => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const BookingPannel = ({ bookingBusiness, bookingUser, workTimes, handleBooking }: BookingPannelProps) => {
  const [datePicked] = useState<Value>(); // Specific to the 'react-calendar'
  const [timePicked, setTimePicked] = useState<Date>(); // Sets selected time to 'datePicked' value to form final Date object
  const { data } = useBookings();
  const currentBookings = data ?? [];

  // Calendar date pick handler
  const handleTimeSelection = (hours: number, minutes: number) => timePicked?.setHours(hours, minutes, 0);

  // For API Post operation
  const handleSubmitReservation = () => {
    if (!timePicked) return; // Date not selected? return.

    const reservationTimeSelected = [timePicked?.getHours(), timePicked?.getMinutes()];
    console.log(reservationTimeSelected);

    try {
      // Any selected time will result in true of this. If not selected - values by defualt will be both zeros.
      if (reservationTimeSelected[0] !== 0) {
        const newBooking = {
          businessId: bookingBusiness,
          userId: bookingUser?._id,
          userEmail: bookingUser?.email,
          reservationTime: reservationTimeSelected,
        };
        postBooking(newBooking);
        // console.log(newBooking);
      } else {
        console.log("failed");
        return;
      }
    } catch (err) {
      throw new Error();
    }
  };

  // Checks and displays only available booking times
  const checkForAvailableBooking = (timeForChecking: Array<number>) => {
    const ans = currentBookings.find(
      (booking) =>
        booking.businessId === bookingBusiness &&
        booking.reservationTime[0] === timeForChecking[0] &&
        booking.reservationTime[1] === timeForChecking[1],
    );
    return !ans;
  };

  return (
    <div className={styles.pannel}>
      <div>
        {bookingUser?.name} | Booking service: {bookingBusiness}
      </div>
      <Calendar
        minDetail="year"
        activeStartDate={new Date()}
        onClickDay={(datePicked) => setTimePicked(datePicked)}
        value={datePicked}
      />

      <div className={styles.workTimeButtons}>
        {workTimes?.map(
          (workTime) =>
            checkForAvailableBooking(workTime) && (
              <Button onClick={() => handleTimeSelection(workTime[0], workTime[1])}>
                {workTime[0]}:{workTime[1] === 0 ? "00" : workTime[1]}
              </Button>
            ),
        )}
      </div>

      <div className={styles.panelButtons}>
        <Button type="submit" onClick={handleSubmitReservation}>
          Submit reservation date
        </Button>
        <Button onClick={handleBooking} type="submit">
          Cancel
        </Button>
      </div>
    </div>
  );
};
