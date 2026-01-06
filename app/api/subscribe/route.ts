import { NextRequest, NextResponse } from "next/server";
import { BeehiivClient } from "@beehiiv/sdk";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Initialize Beehiiv client
    const client = new BeehiivClient({ 
      token: process.env.BEEHIIV_API_KEY as string 
    });

    // Get publication ID from environment variable
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID as string;

    if (!publicationId) {
      return NextResponse.json(
        { error: "Publication ID not configured" },
        { status: 500 }
      );
    }

    // Create custom fields array if first/last name are provided
    const customFields = [];
    if (firstName) {
      customFields.push({
        name: "First Name",
        value: firstName
      });
    }
    if (lastName) {
      customFields.push({
        name: "Last Name",
        value: lastName
      });
    }

    // Create subscription
    await client.subscriptions.create(publicationId, {
      email,
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: "tmax_landing_page",
      utm_medium: "organic",
      custom_fields: customFields.length > 0 ? customFields : undefined,
    });

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Beehiiv subscription error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to subscribe" },
      { status: 500 }
    );
  }
}
