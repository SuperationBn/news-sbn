import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function RecipeReviewCard({ respuestasApi }) {
	const { author, title, published_date, link, summary } = respuestasApi;

	let primeraLetraDelAutor = author === null ? "??" : `${author}`.charAt(0);

	return (
		<Card className="cardContainer" sx={{ maxWidth: 345, bgcolor: "#001b3c" }}>
			<CardHeader
				sx={{ color: "#f9f9f9" }}
				avatar={
					<Avatar sx={{ bgcolor: "#e96d00" }} aria-label="recipe">
						{primeraLetraDelAutor}
					</Avatar>
				}
				title={author ? author : "Author ??"}
				subheader={published_date}
			/>
			<CardMedia
				component="img"
				height="194"
				image={
					respuestasApi?.media
						? respuestasApi.media
						: "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=600"
				}
				alt="Paella dish"
				loading="lazy"
			/>
			<CardContent>
				<Typography
					sx={{ fontWeight: 800, fontSize: "1.2rem" }}
					variant="body6"
					color="text.secondary"
				>
					{title}
				</Typography>
				<Typography
					className="descriptionLineas"
					sx={{ my: "2rem" }}
					variant="body2"
					color="text.secondary"
				>
					{summary}
				</Typography>

				<Button
					href={link}
					target="_blank"
					variant="contained"
					disableElevation
					sx={{ bgcolor: "#e96d00" }}
				>
					read more
				</Button>
			</CardContent>
		</Card>
	);
}
