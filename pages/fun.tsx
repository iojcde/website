import { motion, useViewportScroll, useTransform } from 'framer-motion'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'

const Fun = () => {
  const { scrollYProgress } = useViewportScroll()
  const scaleX = useTransform(scrollYProgress, [0.4, 1], [1, 12])
  const scaleY = useTransform(scrollYProgress, [0.4, 1], [1, 4])
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(
    () => scrollYProgress.onChange((latest) => setScrollProgress(latest)),
    [scrollYProgress],
  )
  return (
    <Layout
      title="Fun - Jeeho Ahn"
      desc="Experiments I've created for fun. Bouncing DVD Logo, and more!"
    >
      <div className="apply-prose container px-4">
        <h1 className="">Have Fun! :p</h1>

        <h2>framer motion thing </h2>
        <div className=" mx-auto mb-16 flex h-80 w-80 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-inner">
          <motion.div
            className="m-auto h-24 w-24 rounded-3xl  bg-white drop-shadow-lg"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: `100%`,
            }}
          />
        </div>

        {/*TODO: fix the dvd logo (doesn't work with preact/compat - works with react)*/}
        <h2>The DVD Logo</h2>
        <p className=" lg:hidden">
          tip: for even more fun try to keep the logo centered
        </p>
        <div className="relative mx-auto">
          <iframe
            className="aspect-[4/3] w-full rounded-lg dark:border dark:border-gray-700"
            src="https://dvd.jcde.xyz/?speed=2&embed=true"
          ></iframe>
          <Link href="https://dvd.jcde.xyz/?speed=2" passHref>
            <a className="absolute right-4 bottom-4 text-xs text-gray-300">
              View in glorious full screen
            </a>
          </Link>
        </div>
        <h2>{scrollProgress > 0.5 ? `Big` : `Small`} Chungus</h2>
        <div
          className=" m-32 mx-auto flex h-80 w-80 overflow-hidden rounded-lg shadow-inner md:h-96 md:w-96"
          style={{
            backgroundImage: `url(images/chungusbg.jpeg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <motion.div
            style={{ scaleX: scaleX, scaleY: scaleY }}
            className="m-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              width="200"
              height="200"
              src="/images/chungus.png"
              alt="big chungus"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
export default Fun
