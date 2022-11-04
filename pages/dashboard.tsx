// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import { Trophy, Table } from 'mdi-material-ui'
import ApexChartWrapper from '../@core/styles/libs/react-apexcharts'
import DepositWithdraw from '../views/dashboard/DepositWithdraw'
import SalesByCountries from '../views/dashboard/SalesByCountries'
import StatisticsCard from '../views/dashboard/StatisticsCard'
import TotalEarning from '../views/dashboard/TotalEarning'
import WeeklyOverview from '../views/dashboard/WeeklyOverview'
import CardStatisticsVerticalComponent from '../@core/components/card-statistics/card-stats-vertical'



const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
