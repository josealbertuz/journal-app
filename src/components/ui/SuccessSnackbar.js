import { Snackbar, Alert } from '@material-ui/core'
import React from 'react'

export const SuccessSnackbar = ({ open, closeSnackbar, message }) => {
    return (
        <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={2000}>
            <Alert severity="success" >
                {
                    message
                }
            </Alert>
        </Snackbar>
    )
}
