import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api/homeFirstBankApi"

// Create report action
export const createValuationReport = createAsyncThunk(
  "valuationReport/create",
  async (reportData, { rejectWithValue }) => {
    try {
      const response = await api.createReport(reportData)
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  },
)

// Get all reports action
export const fetchAllValuationReports = createAsyncThunk(
  "valuationReport/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllReports()
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  },
)

const initialState = {
  reports: [], // For storing all reports
  currentReport: {
    homeDetails: {},
    documentDetails: {},
    valuationDetails: {},
    propertyDetails: {},
  },
  loading: false,
  error: null,
}

const valuationReportSlice = createSlice({
  name: "valuationReport",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.currentReport = {
        ...state.currentReport,
        ...action.payload,
      }
    },
    resetForm: state => {
      state.currentReport = initialState.currentReport
    },
  },
  extraReducers: builder => {
    builder
      // Create report cases
      .addCase(createValuationReport.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(createValuationReport.fulfilled, (state, action) => {
        state.loading = false
        state.reports.push(action.payload)
        state.currentReport = initialState.currentReport // Reset form
      })
      .addCase(createValuationReport.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Get all reports cases
      .addCase(fetchAllValuationReports.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAllValuationReports.fulfilled, (state, action) => {
        state.loading = false
        state.reports = action.payload
      })
      .addCase(fetchAllValuationReports.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { updateFormData, resetForm } = valuationReportSlice.actions
export default valuationReportSlice.reducer
