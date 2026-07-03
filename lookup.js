# Rey Liquidation App V7 - Retail Search Version

This version is the first "real" direction for the app.

It uses:
- iPhone/laptop barcode scanning with ZXing
- Netlify backend function
- UPCitemdb free endpoint
- Open Food Facts
- Open Beauty Facts
- Open Products Facts
- Retail web search through DuckDuckGo HTML results
- Local Rey saved database in browser storage

## What it does

1. Scan barcode.
2. Check saved Rey database.
3. Search free barcode/product databases.
4. Search retail pages across Target, Walmart, Amazon, Home Depot, Lowe's, Best Buy, Kohl's, Wayfair, Costco, and Sam's Club.
5. Extract possible prices from search snippets.
6. Use the highest retail price it can find.
7. Auto-generate a post.

## Important

This does **not** scrape Target directly. It searches public web search results. It is a workaround, not a perfect retail product API.

For a true business-grade version, use:
- Google Programmable Search API or SerpAPI
- A paid UPC/product database
- Supabase for shared inventory
- OpenAI API for stronger listing text
