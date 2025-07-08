import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { license_key } = req.body;
  if (!license_key) return res.status(400).json({ valid: false });

  try {
    const data = readFileSync(join(process.cwd(), 'license_keys.csv'), 'utf8');
    const lines = data.split('\n').slice(1);
    const keys = lines.map(line => line.split(',')[1]);
    const isValid = keys.includes(license_key.trim());

    return res.status(200).json({ valid: isValid });
  } catch {
    return res.status(500).json({ valid: false, message: 'Server error' });
  }
}
