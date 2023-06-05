import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from '@assets/images/DevClustersLogo.png'
import {signIn} from "next-auth/react";
import Fullscreen from "@components/layouts/Fullscreen";
import {Button, Typography} from "@mui/material";
import FlexColumn from "@components/layouts/FlexColumn";


const inter = Inter({subsets: ['latin']})




export default function Home() {

	return (
		<>
			<Head>
				<title>pwa-blueprint</title>
				<meta name="description" content="Generated by create next app"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<Fullscreen
					sx={{
						background:'linear-gradient(45deg, #0f2027, #203a43, #2c5364)',
						display:'flex',
						flexDirection:'grid',
						placeContent:'center',
						gap:'24px'
				}} >
					<FlexColumn>
						<Image
							src={Logo}
							alt="DevClusters Logo"
							width={256}
							height={256}
							priority
						/>
						<Typography variant={'h3'} > Dev Clusters </Typography>
						<Typography variant={'h5'} > PWA Boilerplate </Typography>
						<Button
							variant={'outlined'}
							fullWidth
							color={'white'}
							onClick={ () => signIn() } >
							Sign In
						</Button>
					</FlexColumn>
				</Fullscreen>


				{/*<div className={styles.description}>*/}
				{/*	<p>*/}
				{/*		<a onClick={ () => signIn("github") } >*/}
				{/*			Sign in with Github*/}
				{/*		</a>*/}
				{/*	</p>*/}
				{/*	<div>*/}
				{/*		<a*/}
				{/*			href="https://www.devclusters.com"*/}
				{/*			target="_blank"*/}
				{/*			rel="noopener noreferrer"*/}
				{/*		>*/}
				{/*			By{' '}*/}
				{/*			<Image*/}
				{/*				src={Logo}*/}
				{/*				alt="DevClusters Logo"*/}
				{/*				className={styles.vercelLogo}*/}
				{/*				width={30}*/}
				{/*				height={30}*/}
				{/*				priority*/}
				{/*			/>*/}
				{/*		</a>*/}
				{/*	</div>*/}
				{/*</div>*/}

				{/*<div className={styles.center}>*/}
				{/*	<Image*/}
				{/*		className={styles.logo}*/}
				{/*		src={Logo}*/}
				{/*		alt="DevClusters Logo"*/}
				{/*		width={180}*/}
				{/*		height={180}*/}
				{/*		priority*/}
				{/*	/>*/}
				{/*</div>*/}
			</main>
		</>
	)
}