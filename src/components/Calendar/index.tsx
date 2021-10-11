import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

import { Calendar as CustomCalendar, LocaleConfig,  } from 'react-native-calendars'

import { generateInterval } from './generateInterval'

import theme from '../../styles/theme'
import { ptBR } from './localeConfig'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

interface MarkedDatesProps { 
  [date: string]: {
    color?: string
    textColor: string
    disable?: boolean
    disableTouchEvent?: boolean
  }
}

interface CalendarProps {
  markedDates: MarkedDatesProps
  onDayPress: (date: DayProps) => void
}

interface DayProps {
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}

function Calendar({ markedDates, onDayPress }: CalendarProps){
  return (
    <CustomCalendar 
      renderArrow={( direction ) => 
      <Feather 
        size={24} 
        color={theme.colors.text} 
        name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
      />
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}

      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}

export {
  Calendar,
  generateInterval
}

export type {
  DayProps,
  MarkedDatesProps
}