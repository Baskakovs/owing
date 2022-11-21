function UserSelect(){
    const friendOptions = [
        {
          key: 'Jenny Hess',
          text: 'Jenny Hess',
          value: 'Jenny Hess',
          image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
        },
        {
          key: 'Elliot Fu',
          text: 'Elliot Fu',
          value: 'Elliot Fu',
          image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
        },
        {
          key: 'Stevie Feliciano',
          text: 'Stevie Feliciano',
          value: 'Stevie Feliciano',
          image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
        },
        {
          key: 'Christian',
          text: 'Christian',
          value: 'Christian',
          image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
        },
        {
          key: 'Matt',
          text: 'Matt',
          value: 'Matt',
          image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
        },
        {
          key: 'Justen Kitsune',
          text: 'Justen Kitsune',
          value: 'Justen Kitsune',
          image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
        },
      ]

      const countryOptions = [
        { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
        { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
        { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
      ]
    return(
        <>
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column>
                    <Dropdown
                        placeholder='Select Country'
                        search
                        selection
                        options={countryOptions}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Input
                        placeholder='Search...'
                        defaultValue='0.00'
                    />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown
                        placeholder='Select Country'
                        search
                        selection
                        options={countryOptions}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Input
                        placeholder='Search...'
                        defaultValue='0.00'
                    />
                </Grid.Column>
                <Grid.Column>
                    <span>EUR</span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <span>Groceries</span>
                </Grid.Column>
                <Grid.Column>
                    <span>Accomodation</span>
                </Grid.Column>
                <Grid.Column>
                    <span>Eat-out</span>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <span>Taxi</span>
                </Grid.Column>
                <Grid.Column>
                    <span>Flights</span>
                </Grid.Column>
                <Grid.Column>
                    <span>Entertainment</span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Form>
            <TextArea placeholder='Description' />
        </Form>
        <NavLink to="/">
            <Button fluid>Add</Button>
        </NavLink>
        </>
    )
}

export default UserSelect