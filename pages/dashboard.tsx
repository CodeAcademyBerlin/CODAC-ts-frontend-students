// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import { Trophy, Table } from 'mdi-material-ui'
import ApexChartWrapper from '../@core/styles/libs/react-apexcharts'
import DepositWithdraw from '../componentsDemo/dashboard/DepositWithdraw'
import SalesByCountries from '../componentsDemo/dashboard/SalesByCountries'
import StatisticsCard from '../componentsDemo/dashboard/StatisticsCard'
import TotalEarning from '../componentsDemo/dashboard/TotalEarning'
import WeeklyOverview from '../componentsDemo/dashboard/WeeklyOverview'
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
