import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Title,
  Wrapper,
  HeaderWrapper,
  LoginBtnsWrapper,
  LogoAndBtnsWrapper,
  StyledUserEmail,
  WrapperTheme,
  // StyledSwitcher,
} from './Header.styled';
// import { ThemeProvider } from '@mui/material/styles';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContactBtn/CreateContactBtn';
import { Link } from 'react-router-dom';
import { LoginBtn } from 'components/LoginBtn/LoginBtn';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';
import { useAuth } from 'hook';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleDarkTheme,
  handleLightTheme,
  selectTheme,
} from 'redux/userTheme/slice';
import Switch from '@mui/material/Switch';
import { createTheme, useMediaQuery } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  const currentTheme = useSelector(selectTheme);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [toggleTheme, setToggleTheme] = useState(prefersDarkMode);

  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (currentTheme === 'light') {
      dispatch(handleDarkTheme());
      setToggleTheme(true);
    } else {
      dispatch(handleLightTheme());
      setToggleTheme(false);
    }
  };

  useEffect(() => {
    if (prefersDarkMode) {
      setToggleTheme(prefersDarkMode);
      dispatch(handleDarkTheme());
    } else {
      setToggleTheme(prefersDarkMode);
      dispatch(handleLightTheme());
    }
  }, [prefersDarkMode, dispatch]);

  // MUI Theme
  const mode = currentTheme;
  let theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
      },
    });
  }, [mode]);

  return (
    <HeaderWrapper>
      <LogoAndBtnsWrapper>
        <WrapperTheme>
          <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
            <Wrapper>
              {isLoggedIn ? (
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar" sx={{ width: 50, height: 50 }} />
                </StyledBadge>
              ) : (
                <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
              )}

              <Title>Phonebook</Title>
            </Wrapper>
          </Link>
        </WrapperTheme>
        {/* Mob */}
        <LoginBtnsWrapper className="LoginBtnsWrapper">
          {isLoggedIn ? (
            <>
              <LogoutBtn />
              <StyledUserEmail>{user.email}</StyledUserEmail>
            </>
          ) : (
            <LoginBtn />
          )}
        </LoginBtnsWrapper>
        {/* Desktop */}
      </LogoAndBtnsWrapper>
      {isLoggedIn && (
        <>
          <Filter /> <CreateContact />
        </>
      )}
      <LoginBtnsWrapper className="LoginBtnsWrapperDesk">
        {isLoggedIn ? (
          <>
            <StyledUserEmail>{user.email}</StyledUserEmail>
            <LogoutBtn />
          </>
        ) : (
          <LoginBtn />
        )}
      </LoginBtnsWrapper>
    </HeaderWrapper>
  );
};
