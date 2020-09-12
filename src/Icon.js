import React from 'react';

import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FilterVintageTwoToneIcon from '@material-ui/icons/FilterVintageTwoTone';

class Icon extends React.Component {
  render() {
    return (
      <div>
        <FilterVintageTwoToneIcon /><FilterVintageIcon /><FilterVintageOutlinedIcon />
        <FilterVintageTwoToneIcon /><FilterVintageIcon /><FilterVintageOutlinedIcon />
        <FilterVintageTwoToneIcon /><FilterVintageIcon /><FilterVintageOutlinedIcon />
      </div>
    )
  }
}

export default Icon;