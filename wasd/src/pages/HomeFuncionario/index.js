import { Container, Grid } from "@material-ui/core"
import Chart from "../../components/Chart"

export default function HomeFunc() {
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container lg={4} md={5} xs={12} justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                    <Grid item xs={12} md={12} mb={15}>
                        <Chart></Chart>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}