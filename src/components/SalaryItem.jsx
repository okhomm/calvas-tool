import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

const SalaryItem = ({ sum, day, currency }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: 'success.light' }}>
            <AccountBalanceWalletIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${currency}${sum}`} secondary={`Day ${day}`} />
      </ListItem>
    </List>
  )
}

export default SalaryItem
