import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { clickToDateRange } from '../../AC'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        const action = clickToDateRange(day);
        this.props.dispatch(action);
        //this.setState(DateUtils.addDayToRange(day, this.state))
    }

    render() {
        const { from, to } = this.props.dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    dateRange: {
        from: state.dateRange.from,
        to: state.dateRange.to
    }
})

export default connect(mapStateToProps)(DateRange)