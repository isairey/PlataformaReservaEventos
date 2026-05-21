import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { PieChart } from '@mui/x-charts/PieChart';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import "../view/revenueAdmin.css"



// ----------------------------------------------------------------------

export default function RevenueAdminView() {

    return (
        <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
                Revenue
            </Typography>

            <Grid container className="adminStatistic">
                <Grid item md={4}>
                    <Card className="cardStatistic">
                        <Typography variant="h6" component="div">
                            <PointOfSaleOutlinedIcon /> Total Revenue
                        </Typography>
                        <Typography variant="h4" component="div">
                            100$
                        </Typography>

                    </Card>
                </Grid>

                <Grid item md={4}>
                    <Card className="cardStatistic">
                        <Typography variant="h6" component="div">
                            <PeopleAltOutlinedIcon /> Total Package
                        </Typography>
                        <Typography variant="h4" component="div">
                            100
                        </Typography>

                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <PieChart
                        colors={['red', 'blue', 'green']}
                        series={[
                            {
                                data: [
                                    { id: 0, value: 30, label: 'package A' },
                                    { id: 1, value: 30, label: 'package B' },
                                    { id: 2, value: 40, label: 'package C' },
                                ],
                                innerRadius: 150,
                                outerRadius: 50,
                                paddingAngle: 5,
                                cornerRadius: 5,

                            }
                        ]}
                        width={800}
                        height={600}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
