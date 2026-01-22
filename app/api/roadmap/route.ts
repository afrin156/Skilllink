import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { role } = await req.json()

  if (role.toLowerCase().includes("data engineer")) {
    return NextResponse.json([
      {
        skill: "SQL & Databases",
        resources: [
          "https://www.w3schools.com/sql/",
          "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        ],
      },
      {
        skill: "Python",
        resources: [
          "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
          "https://docs.python.org/3/",
        ],
      },
      {
        skill: "Data Warehousing",
        resources: [
          "https://cloud.google.com/learn/what-is-a-data-warehouse",
          "https://www.youtube.com/watch?v=Z2zjzE6q8tY",
        ],
      },
      {
        skill: "ETL & Pipelines",
        resources: [
          "https://www.youtube.com/watch?v=3QpFq0G7u5Y",
          "https://airflow.apache.org/docs/",
        ],
      },
      {
        skill: "Big Data (Spark)",
        resources: [
          "https://spark.apache.org/docs/latest/",
          "https://www.youtube.com/watch?v=_C8kWso4ne4",
        ],
      },
    ])
  }

  return NextResponse.json([
    {
      skill: "Role not found",
      resources: ["Try: Data Engineer, Frontend Developer"],
    },
  ])
}
