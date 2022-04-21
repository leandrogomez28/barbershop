import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./calendary.css"

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    // <Calendar
    //   value={selectedDay}
    //   onChange={setSelectedDay}
    //   calendarClassName="responsive-calendar" // added this
    //   shouldHighlightWeekends
    // />
    <table class="booked-calendar" data-calendar-id="37" data-calendar-date="2022-04-01">
		<thead>

			
			<tr>
				<th colspan="7">
										<span class="calendarSavingState" style="display: none;">
						<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>
					</span>
					<span class="monthName">
						April 2022											</span>
					<a href="#" data-goto="2022-05-01" class="page-right"><i class="booked-icon booked-icon-arrow-right"></i></a>				</th>
			</tr>
			<tr class="days">
								<th>Mon</th>
				<th>Tue</th>
				<th>Wed</th>
				<th>Thu</th>
				<th>Fri</th>
				<th>Sat</th>				<th>Sun</th>			</tr>
		</thead>
	
	</table>
  );
};

export default App;