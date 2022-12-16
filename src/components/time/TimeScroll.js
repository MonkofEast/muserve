import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector'

class TimeScroll extends React.Component {
    state = { schedule: [] }

    handleChange = newSchedule => {
        this.setState({ schedule: newSchedule })
    }

    render() {
        return (
            <ScheduleSelector
                selection={this.state.schedule}
                numDays={4}
                minTime={6}
                maxTime={23}
                hourlyChunks={2}
                onChange={this.handleChange}
                startDate={new Date('Fri Nov 18 2022 17:57:06 GMT-0700 (PDT)')}
                width='100%'
                timeFormat='hh:mmA'
            />
        )
    }
}

export default TimeScroll